import { useState } from 'react';

import PlayerOne from '../components/teamRegistration/playerOne';
import PlayerTwo from '../components/teamRegistration/playerTwo';
import Team from '../components/teamRegistration/team';
import Confirmation from '../components/teamRegistration/confirmation';
import Success from '../components/teamRegistration/success';
import FormCard from '../components/formCard';

const App = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <FormCard currentStep={formStep} prevFormStep={prevFormStep} maxStep={3}>
        {formStep >= 0 && (
          <PlayerOne formStep={formStep} nextFormStep={nextFormStep}/>
        )}
        {formStep >= 1 && (
          <PlayerTwo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <Team formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 3 && (
          <Confirmation formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 3 && <Success/> }
      </FormCard>
    </div>
  )
}

export default App;