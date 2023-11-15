import { ReactElement } from 'react';
import useDynamicSvgImport, { TIconName } from './useDynamicSvgImport';
import style from './Icon.module.css';

interface IProps extends React.SVGProps<SVGSVGElement> {
  iconName: TIconName;
  wrapperStyle?: string;
}

const Icon = ({ iconName, wrapperStyle, ...svgProps }: IProps): ReactElement => {
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && (
        <div className={style.loader}></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProps} />
        </div>
      )}
    </>
  );
};

export default Icon;
