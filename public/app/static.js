var Course = {
    TATA31: {
        name: "LINEAR ALGEBRA",
        code: "TATA31",
        university: "LiU",
        modules: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]

    }
}

var Modules = {
    1:{
        title:"What is a system of linear equations?",
        content:
                "In mathematics, a system of linear equations (or linear system) is a collection of linear equations involving the same set of variables. For example, <br>" +
                "$$\\begin{align*}" +
                " 3&x &+ 3&y &-   &z  &= &&1\\\\ " +
                " 2&x &+ 2&y &+  4&z  &= &&-2\\\\ " +
                " -&x &+ \\tfrac{1}{2}&y  &-   &z  &= &&0" +
                "\\end{align*}$$" +

                "is a system of three equations in the three variables x, y, z. A solution to a linear system is an assignment of numbers to the variables such that all the " +
                "equations are simultaneously satisfied. A solution to the system above is given by <br>" +
                "$$\\begin{align*}" +
                "x &= & 1&\\\\" +
                "y &= &-2&\\\\" +
                "z &= &-2& " +
                "\\end{align*}$$" +
                "since it makes all three equations valid.The word \"system\" indicates that the " +
                "equations are to be considered collectively, rather than individually."
    },
    2:{
        title: "Solution set to systems of linear equations",
        content:
                "<p>" +
                    "A <strong>solution</strong> of a linear system is an assignment of values to the variables $x_1, x_2, ...,x_n$ " +
                    "such that each of the equations is satisfied. The set of all possible solutions is called the <strong>solution set.</strong>" +
                "</p>" +
                "<p>" +
                    "A linear system may behave in any one of three possible ways:" +
                    "<ol>" +
                        "<li>The system has <i>infinitely many solutions</i>.</li>" +
                        "<li>The system has a <i>single unique solution</i>.</li>" +
                        "<li>The system has <i>no solution</i>.</li>" +
                    "</ol>" +
                "</p>"


    },
    3:{
        title: "Homogenous systems",
        content:
                "<p>" +
                    "A system of linear equations is <strong>homogeneous</strong> if all of the constant terms are zero:" +
                        "$$\\begin{array}{}" +
                        "&a_{11}x_1& + &a_{12}x_{2}& + \\cdots + &a_{1n}x_n&  &&= &0 \\\\ " +
                        "&a_{21}x_1& + &a_{22}x_{2}& + \\cdots + &a_{2n}x_n&  &&= &0 \\\\ " +
                        "       &\\vdots&   &\\vdots&         &\\vdots&    &&\\ &\\vdots \\\\" +
                        "&a_{m1}x_1& + &a_{m2}x_{2}& + \\cdots + &a_{mn}x_n&  &&= &0  " +
                        "\\end{array}$$" +
                    "Every homogeneous system has at least one solution, known as the <strong>zero solution</strong> (or <strong>trivial solution</strong>), " +
                    "which is obtained by assigning the value of zero to each of the variables." +
                "</p>" +
                "<p>" +
                    "Homogenous systems with more variables than equations always have an infinite number of solutions." +
                "</p>"


    },
    4:{
        title: "What is a vector?",
        content:
                "<p>" +
                    "In physics, when you have a vector, you have to keep in mind two quantities: its direction and its magnitude. Quantities that have only a magnitude are " +
                    "called scalars. If you give a scalar magnitude a direction, you create a vector." +
                "</p>" +
                "<p>" +
                    "Visually, you see vectors drawn as arrows, which is perfect because an arrow has both a clear direction and a clear magnitude (the length of the arrow). " +
                    "Take a look at the following figure. The arrow represents a vector that starts at the arrow’s foot (also called the tail) and ends at the head." +
            "<br/>IMG1<br/>" +
                    "<i>A vector, represented by an arrow, has both a direction and a magnitude.</i>" +

                "</p>" +
                "<p>" +
                    "Vectors are represented by bold, lowercase letters in the literature, and by lowercase letters with a line on top; e.g. $\\overline{u}, \\overline{v}, \\overline{w}$" +
            "<br/>IMG2<br/>" +
                    "<i>Equal vectors have the same length and direction but may have different starting points.</i>" +
                "</p>" +
                "<p>" +
                    "Take a look at this figure, which features two vectors, $A$ and $B$. They look pretty much the same — the same length and the same direction. In fact, these vectors are equal. " +
                    "Two vectors are equal if they have the same magnitude and direction, and you can write this as $A = B$." +
                "</p>"



    },
    5:{
        title: "What is a vector space?",
        content:
            "<p>" +
                "<strong>Definition:</strong> A vector space is a collection of objects called vectors. " +
                "Two operations are defined: addition of two vectors and multiplication of a vector with ascalar (multiplication results in scaling). " +
                "More formally, a vector space is a special combination of a group and a field. The elements of the group are called vectors and the elements of the field are called scalars." +
            "</p>"



    },
    6:{
        title: "What is a basis?",
        content:
            "<p>" +
                "A basis is a set of vectors in a given vector space with certain properties:" +
                "<ul>" +
                    "<li>One can get any vector in the vector space by multiplying each of the basis vectors by different numbers, and/or adding them up.</li>" +
                    "<li>If any vector is removed from the basis, the property above is no longer satisfied.</li>" +
                "</ul>" +
                "The Dimension of a given vector space is the number of elements of the basis." +
        "<br/>IMG3<br/>" +
                "<i>This picture illustrates the <b>standard basis</b>  in $R^2$. The red and blue vectors are the elements of the basis; the green vector can be given with the basis vectors.</i>" +
            "</p>" +
                "<p>" +
                "At least two vectors that are non-parallell are required to define a plane. " +
                "</p>" +
                "<p>" +
                "At least three vectors that are not in the same plane are required to define a vector space." +
                "</p>"



    },
    7:{
        title: "Tips for solving problems with vectors",
        content:
            "<p>" +
                "<ol>" +
                "<li><b>Always</b> draw a figure when solving problems involving vectors</li>" +
                "<li>In 2 dimensions: base the figures on the given coordinates</li>" +
                "<li>In 3 dimensions: don’t base the figures on coordinates, but a figure describing the operations that are calculated</li>" +
                "</ol>" +

            "</p>"



    },
    8:{
        title: "Theorem Vector Addition",
        content:
            "<p>" +
                "<ol>" +
                "<li><b>Commutative law:</b> For all vectors $\\overline{u}$ and $\\overline{v}$ in $V$,&nbsp;&nbsp;&nbsp; $\\overline{u} + \\overline{v} = \\overline{v} + \\overline{u}$</li>" +
                "<li><b>Associative law:</b> For all vectors $\\overline{u}, \\overline{v}, \\overline{w}$ in $V$,&nbsp;&nbsp;&nbsp;" +
                        "$\\overline{u} + (\\overline{v} + \\overline{w}) = (\\overline{u} + \\overline{v}) + \\overline{w}$</li>" +
                "<li><b>Additive identity:</b> The set $V$ contains an additive identity element, denoted by $0$, such that for any vector " +
                        "$\\overline{v}$ in $V$,&nbsp;&nbsp;&nbsp; $0 + \\overline{v} = \\overline{v}$   and   $\\overline{v} + 0 = \\overline{v}$" +
                "</li>" +
                "<li><b>Additive inverses:</b> For each vector $\\overline{v}$ in $V$, the equations     $\\overline{v} + \\overline{x} = 0$   and   $\\overline{x} + \\overline{v} = 0$     " +
                        "have a solution $\\overline{x}$ in $V$, called an additive inverse of $\\overline{v}$, and denoted by $-\\overline{v}$." +
                "</li>" +

                "</ol>" +

                "</p>"



    },
    9:{
        title: "Using Vector Addition",
        content:
            "<p>The easiest way to learn how vector addition works is to look at it graphically. There are two equivalent ways to add vectors graphically: " +
                "the tip-to-tail method and theparallelogram method. Both will get you to the same result, but one or the other is more convenient depending " +
                "on the circumstances." +
            "</p>" +
            "<h2>Tip-to-Tail Method</h3>" +
            "<p>" +
                "We can add any two vectors, $A$ and $B$, by placing the tail of B so that it meets the tip of $A$. The sum, $A + B$, is the vector from the tail of $A$ to the tip of $B$." +
            "<br/>IMG<br/>" +
                "Note that you’ll get the same vector if you place the tip of $B$ against the tail of $A$. In other words, $A + B$ and $B + A$ are equivalent." +

            "</p>" +
            "<h2>Parallelogram Method</h3>" +
            "<p>" +
            "To add $A$ and $B$ using the parallelogram method, place the tail of $B$ so that it meets the tail of $A$. Take these two vectors to be the first two " +
                "adjacent sides of a parallelogram, and draw in the remaining two sides. The vector sum, $A + B$, extends from the tails of $A$ and $B$ across the " +
                "diagonal to the opposite corner of the parallelogram. If the vectors are perpendicular and unequal in magnitude, the parallelogram will be a " +
                "rectangle. If the vectors are perpendicular and equal in magnitude, the parallelogram will be a square." +
            "<br/>IMG<br/>" +


            "</p>"



    },
    10:{
        title: "Scalar Multiplication",
        content:
            "<p>" +
                "Scalar multiplication is one of the basic operations defining a vector space in linear algebra. In an intuitive geometrical context, " +
                "scalar multiplication by a positive real number multiplies the magnitude of the vector without changing its direction.The term \"scalar\" " +
                "itself derives from this usage: a scalar is that which scales vectors. "+

            "</p>" +
            "<p>" +
                "Scalar multiplication is the multiplication of a vector by a scalar " +
                "(where the product is a vector), and should not be confused with inner product of two vectors (where the product is a scalar)." +
            "</p>"



    },
    11:{
        title: "Theorem  Scalar Multiplication",
        content:
            "<p>" +
                "For vector $\\overline{u}$, $\\overline{v}$, $\\overline{w}$ and scalar $a, b, c$, the following hold:" +
                "<ol>" +
                "<li>$a (b\\overline{u})  = (ab)(\\overline{u}) = (ba)(\\overline{u})$</li>" +
                "<li>$a (\\overline{u} + \\overline{v})  =  a\\overline{u} + a\\overline{v}$</li>" +
                "<li>$(a + b) \\overline{u} = a\\overline{u} + b\\overline{u}$</li>" +
                "<li>$1\\overline{u} =\\overline{u}$</li>" +
                "</ol>" +
            "</p>"

    },
    12:{
        title: "Using Scalar Multiplication",
        content:
            "<p>" +
                "Here’s how you multiply the vector" +
                "$$ " +
                "\\begin{align*}" +
                "\\overline{w} &= k\\overline{v} \\\\" +
                "&=  k< x,\\ y > \\\\" +
                "&=  < kx,\\ ky> \\\\" +
                "" +
                "\\end{align*}"+
                "$$" +
            "</p>" +
            "<p>" +
                "For example, you multiply the vector $\\overline{p}=< 3,\\ 5 >$ by the scalars 2, –4, and 1/3 as follows: " +
                "$$\\begin{align*} " +
                "2\\overline{p} = 2 < 3,\\ 5 >\\ = &\\ < 6,\\ 10> \\\\ " +
                "-4\\overline{p} = -4 < 3,\\ 5 >\\ = &\\ < -12,\\ -20> \\\\" +
                "\\tfrac{1}{3}\\overline{p} = \\tfrac{1}{3} < 3,\\ 5 >\\ = &\\ < 1,\\ \\tfrac{5}{3}> " +
                "\\end{align*}$$" +
            "</p>" +
                "<p>" +
                "Geometrically speaking, scalar multiplication achieves the following:" +
                "<ul>" +
                "<li>Scalar multiplication by a positive number other than 1 changes the magnitude of the vector but not its direction.</li>" +
                "<li>Scalar multiplication by –1 reverses its direction but doesn’t change its magnitude.</li>" +
                "<li>Scalar multiplication by any other negative number both reverses the direction of the vector and changes its magnitude.</li>" +
                "<li>Scalar multiplication of a vector changes its magnitude and/or its direction.</li>" +
             //IMG ???
                "</ul>" +
                "For example, the vector $2\\overline{p}$ is twice as long as $\\overline{p}$, the vector $\\tfrac{1}{2} \\overline{p}$ is half as long as $\\overline{p}$, " +
                "and the vector $–\\overline{p}$ is the same length as \\overline{p} but extends in the opposite direction from the origin (as shown here)." +
                "</p>"



    }


}

