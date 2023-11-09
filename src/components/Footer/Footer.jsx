import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gray-400 ">
            <div>
                <p className="text-sm text-gray-600 text-center">
                    &copy; Copyright 2023. All Rights Reserved by MyBlog.
                </p>
            </div>
        </section>
    )
}

export default Footer