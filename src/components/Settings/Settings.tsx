import type { FC } from 'react';
import { Slider } from '@mui/material';
import styled from '@emotion/styled';

const CustomizedSlider = styled(Slider)`
  color: red;
  width: 50%;
`;

const Settings: FC = () => {
  return (
    <div>
      <CustomizedSlider
        defaultValue={50}
        min={10}
        max={60}
      />
    </div>
  );
};

export default Settings;
