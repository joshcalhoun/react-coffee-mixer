import { inputTypes } from '../../common/Input'
import {
  NAME,
  AMOUNT,
  ROAST
} from "./constants";

export default {
  name: {
    name: NAME,
    type: 'text',
    label: 'Name'
  },
  amount: {
    name: AMOUNT,
    type: 'number',
    label: 'Amount',
  },
  roast: {
    name: ROAST,
    type: 'select',
    label: 'Select Roast',
  }
}
