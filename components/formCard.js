export default function FormCard({ children, currentStep, prevFormStep, maxStep }) {
    return (
        <div className="container-style w-full h-[400px] sm:h-[500px] md:h-[600px] text-center bg-gradient-to-b from-[#c6b9fe] to-[#EEEBFD]">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div className="rounded-lg bg-white p-6 shadow-xl shadow-grey-400">
                {children}
                {currentStep < maxStep && (
                    <>
                        {currentStep > 0 && (
                           <button
                                className="bg-[#200263] hover:bg-[#c6b9fe] py-2 my-4"
                                onClick={prevFormStep}
                                type="button"
                            >
                                Back
                            </button> 
                        )}
                    </>
                )}
            </div>
            </div>
    </div>
    )
}