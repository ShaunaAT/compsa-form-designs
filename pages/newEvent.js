import { useState } from 'react';

import BasicInfo from '../components/createEvent/basicInfo';
import Details from '../components/createEvent/details';
import Awards from '../components/createEvent/awards';
import EventSuccess from '../components/createEvent/eventSuccess';
import FormCard from '../components/formCard';

const NewEvent = () => {
    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div>
          <FormCard currentStep={formStep} prevFormStep={prevFormStep} maxStep={2} >
            {formStep >= 0 && (
              <BasicInfo formStep={formStep} nextFormStep={nextFormStep}/>
            )}
            {formStep >= 1 && (
              <Details formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <Awards formStep={formStep} nextFormStep={nextFormStep}/>
            )}
            {formStep > 2 && <EventSuccess/> }
          </FormCard>
        </div>
      )
}

export default NewEvent;