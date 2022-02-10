import React, { useEffect, useState } from 'react'

import { Select } from 'swingby'
import { useNavigate, useLocation } from 'swingby/router'

const LanguageSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    {
      value: 'en-GB',
      label: 'English',
    },
    {
      value: 'en-US',
      label: 'English (US)',
    },
    {
      value: 'ko-KR',
      label: 'Korean',
    },
  ];

  const [currentLocale, setCurrentLocale] = useState(location.locale);

  useEffect(() => {
    if (location.locale !== currentLocale) {
      navigate(location.pathname, { locale: currentLocale });
    }
  }, [currentLocale, location, navigate])

  return (
    <Select
      value={currentLocale}
      options={options}
      onChange={e => setCurrentLocale(e.target.value)}
    />
  );
}

export default LanguageSelector
