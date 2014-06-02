Rinoh is not only Hashing
===================

#This document

So this document is not documentation for how to get the developed rinoh server to work but rather
a brief overview of the system, the concept behind it. The purposes of this document is to suggest a
way forward for Spotify in handling their users passwords. This is due to the incomplete nature of
rinoh which shall only be viewed as prototype.

#Background

There has, as most know, been some major leaks of password databases during the last couple of years.
Adobe and LinkedIn has been among the most prominent among them. The major problem, that we see, with
these leaks is that peoples passwords might not be exposed today, due to protecting them in some manner,
but will, as we have seen, be exposed in the future. Once the a data base leak the information is out
there for ever, and even if the data is unreadable today does not mean that it is safe in the long run.

## Best practise
The current best practise for password storage can be found at [owasp](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet).
and they can be divided in to two sub-categories.

1. The use of a [KDF](http://en.wikipedia.org/wiki/Key_derivation_function)
  * [Scrypt](http://en.wikipedia.org/wiki/Scrypt)
  * [PBKDF2](http://en.wikipedia.org/wiki/PBKDF2)
  * [Bcrypt](http://en.wikipedia.org/wiki/Bcrypt)

2. The use of a site wide key and [HMAC](http://en.wikipedia.org/wiki/HMAC)

A long, random and unique salt shall always be used for all users no matter which of the constructs
one use to protect users passwords. This for most to ensure that any rainbow tables cant be created

###KDF
A KDF is essentially a slow hash/on-way function. All of the once mentioned above can be tuned to your
system to take a predetermined amount of time to calculate the resulting digest. i.e. 200ms.
The reason for using a KDF instead of a normal hash function, such as SHA-256, is that there is
an asymmetric relationship between us, trying to authenticate a user, and an adversary trying to
brute force a leaked digest. An adversary have to try millions of combinations for each password while
we when authenticating a user only have to calculate one or two digests. If each digest takes 200ms
to compute it quickly becomes unfeasible for an adversary to attack users digests where the underlying
password is at some strength.

The problem with using a KDF is however that it in fact takes longer time to compute a hash. And it
is easy to see that such constructs might cause big problems for a system handling millions of users.
Even though there might not be that many login attempts each second and one or two servers could handle
this without any problems. There is however the occurrence of login storms, where tens of thousands
might try to authenticate at the same time. If it we can handle about 10 request per second, which
would be the normal password authentication rate, 10'000 request will require around 17 minutes.
This would more or less be constitute a self created ddos attack, since people would try to re authenticate
again if they get no response within a few seconds an the request would snowball.

Further, when using a KDF one would have to implement rate limiting or better yet a proof of work schema.
This since a single machine easily could make thousands of login attempts a second making the system
very vulnerable for dos attacks.

###HMAC
The idea behind using a HMAC for password authentication is that we create a secret key which all servers
authentication passwords have access to. This key is then used with the HMAC construct to create a
Message-Authentication-Code from the password and salt. It works more or less as a regular hash function
but we throw in a secret key as well.

The benefit of using this construct is that it is fast, more or less as fast as the underlying hash
function. It also means that no brute force attempt can be launched on leaked digests as long as
the site wide key is not available. There for the rule is not to store that key in the same
place as the digests.

The main problem with this construct is that the site wide key used to compute the MAC can never be
changed(in an offline mode). Meaning that if an adversary would get a hold of the users digest, there
is nothing we can do but ask all of our affected users to change their passwords. Because we can't change
the key an adversary essentially have very large amount of time to compromise a server containing that key.
Once this is done, brute forcing users password is fast and relatively easy.


##Problems with practises today
### They are not maintainable

So one of the main problems in our minds is that once we have choose a paradigm to use we can not change
it. We are, for better or for worse, locked in to it and it is very hard to escape

### They have no "real" counter measures

No matter which paradigm you choose from the best practise you will still be stuck between a rock and
a hard place in case the database leak. There is really nothing you can do without the participation
of your users. In the case of the HMAC you will have to keep the key around as long as all users has not
switched their password. In the case of a KDF you can only pray that the KDF is hard enough for long enough
to have all your users replace there password on you service and any other where they might use it.

### Users suffer

So our, as service providers, response to the leaks that has been and the threat of them has been to
put more responsibility on the user in selecting very complicated, hard to remember and unique passwords
for each service they use. This in order to keep them safe in case we fuck up, as so many have done.
The user trust us, the service providers, to keep there passwords safe and not use them to harm them.
The thing is that we still do this with the best practise in place, they are simply not strong enough
to protect users credentials if the derived form are leaked.

We feel that this is inherently wrong, we should make it easy and pleasant for our users to sign up,
login and use our service. But we are still putting ridicules constraints on password complexity.
In out minds the constraint reason for such constrains is to prevent online brute force login attempts.
Meaning that we should enforce rate limiting, proof-of-work,lockouts and other measures rather
then having password complexity constraints. There should of course be some. But 5-6 ASCII chars
and having a banned common password list should be enough. The constructs should protect a week password
like this both in case of a database leak and for brute force login attempts.


#A better Model?

In case of best practise today there are two main flaw.

1. There is only one point, the database, that has to be compromised in case of the KDF and
two point in case of the HMAC
2. Once a system get compromised there is nothing we can do, no counter measures.

So there are some different ways to address these problems but the one we have selected is in many
ways a combination and modification of the current best practises. The fundamental idea is to instead
of using an HMAC to apply a site wide key we shall use a symmetric cipher like AES. Before encrypting,
using AES, we still run the password and salt through a KDF or other one-way-function.

This essentially makes the construct identical to the HMAC solution, both from our side and the adversary.
Attacking `HMAC-SHA2(key, salt||pwd)` or `AES(key, iv, SHA2(salt||pwd))` would entail no real difference.
The big difference does however lay at our side. If the database is leaked, we can decrypt all the digest and
re-encrypt them with a new key. Once this is done for all users, the old deprecated key can be destroyed.
When this is done, there would be no way for anyone to decrypt the protecting AES encryption surrounding
the leaked hash digest. We have essentially destroyed all the information that was leaked. There is sill
however only two point that would have to be compromised in order for an adversary to be able to
launch an brute force attack. To remedy this we can apply multiple AES encryptions all with different keys.
If each key now resides on only one specific server it means that and adversary would have to undiscovered
compromise all the serves involved. The construct would look some thing like the following,
```
digest = version || salt ||
            AES(key_n_version, iv_n,
              ...
                AES(key_1_version, iv_1,
                    AES(key_0_version, iv_0 salt||pwd)
                )
              ...
            );
```

#Rinoh implementation

We created a distributed software that uses the underlying construct, from above, that derives
users password and salts into digests for storage or comparisons. The digest is tagged with a version
which corresponds to a set of keys within the cluster running the software.

The software can really be summarized in to the following section of code. The point to make here
is that each recursive step in encrypt and decrypt is executed on a different machine that has
access to the key used.

```java
//Deriving a key for storage and comparison
public byte[] deriveKey(byte[] password, byte[] salt,
                      int version){
  byte[] digest = kdf(password, salt);
  return encrypt(digest, salt, version, 0);
}
//Updating a digest, essentially switching the set of keys used
//key in this case is the resulting digest from deriveKey.
public byte[] deriveNewKey(byte[] key, byte[] salt,
                    int currentVersion, int newVersion){
  int depth = getLevelDepth(currentVersion);
  key = decrypt(key, salt, currentVersion, depth);
  return encrypt(key, salt, newVersion, 0);
}

private byte[] encrypt(
        byte[] digest, byte[] salt, int version, int level){
  digest = crypt(true, digest, salt, version, level);
  if(level != getLevelDepth(version))
    return encrypt(digest, salt, version, level+1);
  return digest;
}

private byte[] decrypt(
        byte[] digest, byte[] salt, int version, int level){
  digest = crypt(false, digest, salt, version, level);
  if(level != 0)
    return decrypt(digest, salt, version, level-1);
  return digest;
}

private byte[] crypt(boolean encrypt, byte[] digest, byte[] salt, int version, int level){
  byte[] key = getKey(version, level);
  byte[] iv = sha256(salt, version, level);
  return aesCtr(encrypt, key, iv, digest);
}
```

In addition to the functionality described above the rinoh allows for an administrator to create
new sets of keys tagged with a version. This processes is completely self contained, the administrator only
has to initiate the process through the hermes-api or the one in use. The servers create and share the keys
amongst them self to minimize the amount of copies. Rinoh also have functionality for destroying key sets
of outdated versions.

As a whole Rinoh tries to act as an hash-oracle which other services can aks for the digest of particular
strings. It is built in java and on top of Akka. It has a hermes API implemented as well as a generic protobuf
and Akka API. It does not use any databases but relies on configuration files which is updated during run time.
It has built in distribution management and distributes the state of the cluster, keys, configuration
and other important data to the relevant nodes and it also handles discovery, all this to make configuration
as easy and secure as possible.


##Future work
As of now Rinoh is very much a prototype. It does however work well as intended in an testing environment.
There are however some major work to be done in order for it to be put in some sort of production.
The reasons for this is the fact that switching over to a system like this comes with some risk, just
as for the adversary not getting hold of all the keys rendering the data useless. If a key in a key set
was lost, all the digest stored would become useless meaning that all passwords for all users would have
to be restored. The work we think shall

* Rip out all the parts regarding distribution of state, configuration and so on to replace it with
  some thing like [ZooKeeper](http://zookeeper.apache.org/).
  The reason for this is the fact that it is very hard to write distributed software. We are no experts
  in the area and even though rinoh seams to have some eventual consistency in a test environment, it is
  probably riddled with raise conditions and so on. Better to make use of software which is battle proven.

* Implement rate limiting, high water marks and fix some memory leaks. Akka is not famous for being practical
  when it comes to real world situations due to the fact that is has properties such as infinite ques and so on.
  The other thing are that data is saved on a few nodes in the network for each request and deleted once a
  response arrives. If this does not happen the data will be there forever.

* One of our thought regarding this project is if it should have been written in Akka at all. The main reason
  for using it was its internal abstraction of distribution. No code to handle transport between nodes in the
  cluster had to be written. This might not have been such a good idea since Akka brings other, rather unwanted
  things to the table.

* More testing! Even consider using a product like this it must be tested more then we have had time to do.
  Our suggestion would be to run it in parallel or partially in parallel with the current system way of doing
  password authentication to ensure that is behaves as expected.















