import { useEffect } from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

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
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel forInput="name">
                                        Name
                                    </InputLabel>
                                    <TextInput
                                        name="name"
                                        id="name"
                                        placeholder="Your name..."
                                        value={data.name}
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    ></TextInput>
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    ></InputError>
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
                                        value={data.email}
                                        handleChange={onHandleChange}
                                        required
                                    ></TextInput>
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    ></InputError>
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
                                        value={data.password}
                                        handleChange={onHandleChange}
                                        required
                                    ></TextInput>
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    ></InputError>
                                </div>
                                <div>
                                    <InputLabel forInput="password_confirmation">
                                        Confirm Password
                                    </InputLabel>
                                    <TextInput
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        placeholder="Your password confirmation"
                                        value={data.password_confirmation}
                                        handleChange={onHandleChange}
                                        required
                                    ></TextInput>
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    ></InputError>
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route("login")}>
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
