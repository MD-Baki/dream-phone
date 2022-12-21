import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Blog = () => {
    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="grid gap-6 justify-center items-center mx-auto w-11/12 lg:w-10/12 py-14"
        >
            <div>
                <h2 className="text-center text-2xl font-bold">My Blog</h2>
            </div>

            <div className="border border-primary rounded-lg overflow-hidden">
                <div className="flex gap-2 items-center bg-primary bg-opacity-20 py-4 px-3">
                    <FaAngleDoubleRight />
                    <h2 className="text-lg font-medium">
                        What are the different ways to manage a state in a React
                        application?
                    </h2>
                </div>
                <p className="px-3 py-5 font-light text-[#474747]">
                    Once you attempt to manage state across multiple components,
                    things get a bit trickier. You will reach a point in your
                    application where patterns like “lifting state up” and
                    passing callbacks down to update your state from components
                    lead to lots and lots of props. What do you do if you want
                    to update a component’s state from basically anywhere in
                    your app? You turn it into global state. To manage it,
                    however, you should opt for a third-party solution. Many
                    developers are inclined to use built-in React features like
                    the Context API to manage their state.
                </p>
            </div>
            <div className="border border-primary rounded-lg overflow-hidden">
                <div className="flex gap-2 items-center bg-primary bg-opacity-20 py-4 px-3">
                    <FaAngleDoubleRight />
                    <h2 className="text-lg font-medium">
                        How does prototypical inheritance work?
                    </h2>
                </div>
                <p className="px-3 py-5 font-light text-[#474747]">
                    JavaScript is a prototype-based, Object Oriented programming
                    language. After the ES6 updates, JavaScript allowed for
                    “prototypal inheritance”, meaning that objects and methods
                    can be shared, extended, and copied.
                </p>
            </div>
            <div className="border border-primary rounded-lg overflow-hidden">
                <div className="flex gap-2 items-center bg-primary bg-opacity-20 py-4 px-3">
                    <FaAngleDoubleRight />
                    <h2 className="text-lg font-medium">
                        What is a unit test? Why should we write unit tests?
                    </h2>
                </div>
                <p className="px-3 py-5 font-light text-[#474747]">
                    The main objective of unit testing is to isolate written
                    code to test and determine if it works as intended. Unit
                    testing is an important step in the development process,
                    because if done correctly, it can help detect early flaws in
                    code which may be more difficult to find in later testing
                    stages.
                </p>
            </div>
            <div className="border border-primary rounded-lg overflow-hidden">
                <div className="flex gap-2 items-center bg-primary bg-opacity-20 py-4 px-3">
                    <FaAngleDoubleRight />
                    <h2 className="text-lg font-medium">
                        React vs. Angular vs. Vue?
                    </h2>
                </div>
                <p className="px-3 py-5 font-light text-[#474747]">
                    This post is a comprehensive guide on which is perhaps the
                    right solution for you: Angular vs React vs Vue. Just a
                    couple of years ago, developers were mainly debating whether
                    they should be using Angular vs React for their projects.
                    But over the course of the last couple of years, we’ve seen
                    a growth of interest in a third player called Vue.js. If you
                    are a developer starting out on a project and cannot decide
                    on which JavaScript framework to use, this guide should help
                    you make a decision.
                </p>
            </div>
        </div>
    );
};

export default Blog;
