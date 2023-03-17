import { Link } from "@inertiajs/react";
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import { UserMenu, UserOthers } from "./MenuList";
import MenuItem from "./MenuItem";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                ></MenuItem>
                            );
                        })}
                    </div>
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    method={menu.method}
                                ></MenuItem>
                            );
                        })}
                    </div>
                    {auth.active_plan && (
                        <SubscriptionDetail
                            name={auth.active_plan.name}
                            isPremium={auth.active_plan.name === "Premium"}
                            remainingActiveDays={
                                auth.active_plan.remaining_active_days
                            }
                            activeDays={auth.active_plan.active_days}
                        ></SubscriptionDetail>
                    )}
                    {/* <div className="mt-auto pr-[30px]">
                        <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                            <div className="text-black text-lg font-semibold mb-8">
                                Basic
                            </div>
                            <div className="text-black text-sm mb-2">
                                5 of 30 hari
                            </div>
                            <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                                <div className="rounded-full h-full w-2/12 bg-alerange"></div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="mt-auto pr-[30px]">
                        <div className="p-5 bg-black rounded-[25px]">
                            <img src="/icons/ic_star-rounded.svg" alt="" />
                            <div className="text-white text-lg font-semibold mt-4 mb-8">
                                For Greatest
                            </div>
                            <div className="text-white text-sm mb-2">
                                12 of 30 hari
                            </div>
                            <div className="rounded-full w-full h-[6px] bg-[#333333]">
                                <div className="rounded-full h-full w-9/12 bg-alerange"></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </aside>
    );
}
