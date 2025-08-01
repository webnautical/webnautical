import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import QuoteContext, { quoteContext } from '../../../contexts/QuoteContext';

//images imports
// import sst1Img from '../../../assets/button-navigation-images/online-course.gif';
// import sst2Img from '../../../assets/button-navigation-images/responsive-design.gif';
// import sst3Img from '../../../assets/button-navigation-images/responsive.gif';
// import sst4Img from '../../../assets/button-navigation-images/cyber-bullying.gif';
// import sst5Img from '../../../assets/button-navigation-images/monitor.gif';

export const step1Data = [
  // {
  //   image: sst1Img,
  //   text1: 'Website Desing '
  // },

  // {
  //   image: sst2Img,
  //   text1: 'Website',
  //   text2: 'Redesing'
  // },
  // {
  //   image: sst3Img,
  //   text1: 'Mobile',
  //   text2: 'Application'
  // },
  // {
  //   image: sst4Img,
  //   text1: 'Seo/ Degital',
  //   text2: 'Marketing'
  // },
  // {
  //   image: sst5Img,
  //   text1: 'Custom Web',
  //   text2: 'Development'
  // }
];

export const step2Data = [
  {
    text1: '$1000'
  },
  {
    text1: '$1001-3000'
  },
  {
    text1: '$3001-5000'
  },
  {
    text1: '$5001-10000'
  },
  {
    text1: 'Not Sure'
  }
];

function FirstComponent({ data, updateFormData }) {
  const { errors } = useContext(quoteContext);
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  // const [formData, setFormData] = useState({ service: '', budget: '' });
  useEffect(() => {}, [data]);
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);
  console.log(service, 'serviceee');
  console.log(budget, 'budgettttttt');
  console.log(errors,'error')
  const handleServiceChange = (e) => {
    const value = e.target.value;
    setService(value);
    updateFormData({ service: value, budget});
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    // Check if the value is 'Not Sure', if yes, set it directly, else set the budget value
    setBudget(value === 'Not Sure' ? value : value.replace('undefined', ''));
    // Ensure to call updateFormData with the correct value for budget
    updateFormData({ service, budget: value === 'Not Sure' ? value : value.replace('undefined', '') });
  };

 // console.log(updateFormData, 'updateformdata');

  return (
    <>
      <div className="radio-box">
        {data.map((item, index) => (
          <ServicesCart key={index} cartData={item} handleServiceChange={handleServiceChange} handleBudgetChange={handleBudgetChange} />
        ))}
      </div>
      {errors.service && <p className="mt-4 text-danger"> Please Select A Service</p>}
      {errors.budget && <p className="mt-4 text-danger"> Please Select budget</p>}
    </>
  );
}

export default FirstComponent;

const ServicesCart = ({ cartData, handleServiceChange, handleBudgetChange }) => {
  const { register } = useContext(quoteContext);

  const { image, text1, text2 } = cartData;
  return (
    <div className={`radios-ele flex-item slideLeft ${image ? 'service' : 'budget'}`}>
      <input
        type="radio"
        name={image ? 'service' : 'budget'}
        id={`${text1}${text2}`}
        value={`${text1}${text2}`}
        {...register(`${image ? 'service' : 'budget'}`, { required: true })}
        onChange={image ? handleServiceChange : handleBudgetChange}
      />
      <label htmlFor={`${text1}${text2}`}>
        <div className="icons_boc_inner"> {image && <img src={image} alt={`${text1}`} />}</div>
        {image && <br />}

        <span>{text1}</span>
        <br />
        {text2 && <span>{text2}</span>}
      </label>
    </div>
  );
};
