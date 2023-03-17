import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            <Head title="Sign up"></Head>
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel forInput="fullname">
                                        Full Name
                                    </InputLabel>
                                    <TextInput
                                        name="fullname"
                                        id="fullname"
                                        placeholder="Your fullname..."
                                    ></TextInput>
                                </div>
                                <div>
                                    <InputLabel forInput="email">
                                        Email Address
                                    </InputLabel>
                                    <TextInput
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email Address"
                                    ></TextInput>
                                </div>
                                <div>
                                    <InputLabel forInput="password">
                                        Password
                                    </InputLabel>
                                    <TextInput
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your password"
                                    ></TextInput>
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link href={route("prototype.dashboard")}>
                                    <Button>
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
