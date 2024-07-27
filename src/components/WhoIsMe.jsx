import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function WhoIsMe() {
    const sendProps = {
        image:
            "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Sedikit Mengenai Kami",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    return (
        <section className="block md:grid grid-cols-2 gap-5 lg:gap-28 mb-17 px-8 py-10 mx-auto">
            <img
                src={sendProps.image}
                className="mb-10 md:mb-0 rounded-3xl w-full h-full object-cover"
                loading="lazy"
            />
            <div className="flex flex-col justify-center">
                <h2 className="font-bold text-3xl mb-5">{sendProps.title}</h2>
                <p className="mb-5">{sendProps.description}</p>
                <Link to="/about">
                    <Button
                        size="lg"
                        color="green"
                    >
                        Baca Lebih Lanjut
                    </Button>
                </Link>


            </div>
        </section>
    );
}