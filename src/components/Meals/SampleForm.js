
// import useFetch from "../hooks/use-fetch";
import { useState } from "react";
const offer = {
    'ContractorName': 'Yugma Patel',
    'newOffer': 'yes'
}
const SampleForm = () => {
    // const { isLoading, error, sendRequest: fetchMeals } = useFetch();
    const [isOffer, setIsOffer] = useState({ contractorName: "", newOffer: "" });
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('isOffer', isOffer);
            // console.log('isOffer', projectId);
            alert('ddd');
            // await approveOffer({
            //     variables: { isOffer, projectId },
            // });
        } catch (err) {
            console.log(err);
        }
    };
    const handleChange = (e) => {
        console.log('on click ', e.target);
        console.log('on click ', e.target.innerText);
        const name = e.target.getAttribute('name');
        const value =  e.target.getAttribute('value');

        // const { name, value } = e.target;
        setIsOffer({
            ...isOffer,
            [name]: value,
        });
    };
    return (
        <form className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}>
            <p
                className="card-body"
                name="contractorName"
                value={offer.ContractorName}
                onClick={handleChange}
            >
                Offer By:{offer.ContractorName}
            </p>
            <p name="newOffer"
                value={offer.newOffer}
                onClick={handleChange}
            >
                The Offer Value:{offer.newOffer}{" "}
            </p>
            <button className="btn d-block w-100" type="submit"/>
        </form>


    );
};

export default SampleForm;
