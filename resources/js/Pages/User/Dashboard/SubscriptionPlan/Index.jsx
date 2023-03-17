import { Head, router } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan({ auth, subscription_plans }) {
    const selectedSubscription = (id) => {
        router.post(
            route("user.dashboard.subscription-plan.subscribe", {
                subscription_plan: id,
            })
        );
    };

    return (
        <>
            <Head>
                <title>Subscription Plan</title>
            </Head>
            <Authenticated auth={auth}>
                {/* <!-- START: Content --> */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new
                            experiences from movies.
                        </p>

                        {/* <!-- Pricing Card --> */}
                        <div className="flex justify-center gap-10 mt-[70px]">
                            {subscription_plans.map((subscription_plan) => {
                                return (
                                    <SubscriptionCard
                                        key={subscription_plan.id}
                                        id={subscription_plan.id}
                                        name={subscription_plan.name}
                                        price={subscription_plan.price}
                                        durationInMonth={
                                            subscription_plan.active_period_in_months
                                        }
                                        features={JSON.parse(
                                            subscription_plan.features
                                        )}
                                        isPremium={
                                            subscription_plan.name === "Premium"
                                        }
                                        onSelectedSubscription={() =>
                                            selectedSubscription(
                                                subscription_plan.id
                                            )
                                        }
                                    ></SubscriptionCard>
                                );
                            })}
                        </div>
                        {/* <!-- /Pricing Card --> */}
                    </div>
                </div>
                {/* // <!-- END: Content --> */}
            </Authenticated>
        </>
    );
}
