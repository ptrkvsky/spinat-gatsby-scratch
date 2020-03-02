import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faRocket,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { InfosIconsDetailContainer } from '../../styles/slices/SliceInfosIconsDetail';

const SliceInfosIconsDetail = ({ item }) => {
  let icon;
  if (item.icon_class === 'chart-bars') {
    icon = faChartBar;
  } else if (item.icon_class === 'rocket') {
    icon = faRocket;
  } else if (item.icon_class === 'pie-chart') {
    icon = faChartPie;
  }

  return (
    <InfosIconsDetailContainer className="InfosIconsDetailContainer">
      <FontAwesomeIcon size="3x" icon={icon} />
      <div
        className="bloc-title"
        dangerouslySetInnerHTML={{
          __html: item.bloc_title.html,
        }}
      />
      <div
        className="bloc-shortdesc"
        dangerouslySetInnerHTML={{
          __html: item.short_description.html,
        }}
      />
    </InfosIconsDetailContainer>
  );
};
// console.log(item);
// let icon;
// switch (item.icon_class) {
//   case 'icon-design':
//     icon = faChartBar;
//     break;
//   case 'icon-class':
//     icon = faRocket;
//     break;
//   default:
//     return false;
// }
// return (
//   <div className="ok">
//     test ok
//     <div
//       className="bloc-shortdesc"
//       dangerouslySetInnerHTML={{
//         __html: item.short_description.html,
//       }}
//     />
//     <div
//       className="bloc-title"
//       dangerouslySetInnerHTML={{
//         __html: item.bloc_title.html,
//       }}
//     />
//   </div>
// );

SliceInfosIconsDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliceInfosIconsDetail;
