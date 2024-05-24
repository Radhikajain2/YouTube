/* eslint-disable prettier/prettier */

import {Colors, Outlines, ScaledSheet} from '../../styles';

export const SearchScreenStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.s700,
  },
  iconStyle: {
    fontSize: '30@ms',
    color: Colors.neutral.white,
    marginTop: '15@ms',
  },
  secondContainer: {
    flexDirection: 'row',
    padding: '5@ms',
    justifyContent: 'space-around',
  },
  inputStyle: {
    width: '80%',
    height: '40@ms',
    borderWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.s600,
    borderRadius: Outlines.borderRadius.base,
    backgroundColor: Colors.neutral.s600,
    fontSize: '18@ms',
    color: Colors.neutral.white,
    paddingHorizontal: '10@ms',
    marginTop: '10@ms',
  },
});
