

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 mb-8 mt-24 text-center">
            <p className="text-blue-800 font-bold mb-2">--- {subHeading} ---</p>
            <h3 className="text-4xl border-y-4 font-semibold py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;