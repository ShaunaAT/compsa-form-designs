import { useState } from 'react';

import BasicInfo from '../components/createEvent/basicInfo';
import Details from '../components/createEvent/details';
import Awards from '../components/createEvent/awards';
import EventSuccess from '../components/createEvent/eventSuccess';
import FormCard from '../components/formCard';
import EventConfirmation from '../components/createEvent/eventConfirmation';

const NewEvent = () => {
    const [formStep, setFormStep] = useState(0);

    const [eventData, setEventData] = useState({
      event_id: "",
      title: "",
      date: "",
      location: "",
      description: "",
      image: "",
      is_active: false,
      awards: [],
      tags: [],
    });

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div>
          <FormCard currentStep={formStep} prevFormStep={prevFormStep} maxStep={2} >
            {formStep >= 0 && (
              <BasicInfo eventData={eventData} setEventData={setEventData} formStep={formStep} nextFormStep={nextFormStep}/>
            )}
            {formStep >= 1 && (
              <Details eventData={eventData} setEventData={setEventData} formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <Awards eventData={eventData} setEventData={setEventData} formStep={formStep} nextFormStep={nextFormStep}/>
            )}
            {formStep >= 3 && (
              <EventConfirmation eventData={eventData} setEventData={setEventData} formStep={formStep} nextFormStep={nextFormStep}/>
            )}
            {formStep > 3 && <EventSuccess/> }
          </FormCard>
        </div>
      )
}

export default NewEvent;