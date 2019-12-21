// @flow

import React from 'react';
import { Thumbnail } from 'native-base';
import * as flags from 'react-native-flags/flags';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const Flag = ({ size = 64, code, type = 'shiny', style }: Props) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];

  return (
    <Thumbnail
      source={flag || unknownFlag}
      style={[{ width: size, height: size, zIndex: 100 }, style]}
    />
  );
};

export default Flag;
