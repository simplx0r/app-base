import { observer } from 'mobx-react-lite';
import { Header } from './Header';

const elements = [Header];

const provided = elements.forEach((element) => observer(element));

export { provided };
