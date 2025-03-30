import landing from "@/assets/landing_image.png";

const Hero = () => {
    return(
        <div>
            <img src={landing} alt="" className={ "w-full max-h-[600px] object-cover"}/>
        </div>
    )
}
export default Hero;