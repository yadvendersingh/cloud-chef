import app_layout from "@/assets/app_layouts.png"
import appDownloadImage from "@/assets/appDownload.png"

const HomePage = () => {
    return(
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">Welcome to CloudChef</h1>
                <span className="text-xl">
                    All cuisines just a click away.
                </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={app_layout} alt=""/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tight">
                        Order takeaways from your favourite restaurants.
                    </span>
                    <span>
                        Download the app and order from your favourite restaurants anytime, anywhere.
                    </span>
                    <img src={appDownloadImage} alt=""/>
                </div>
            </div>
        </div>
    )

}

export default HomePage;