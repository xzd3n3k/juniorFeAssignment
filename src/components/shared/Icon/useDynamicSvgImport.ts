import { FC, SVGProps, useEffect, useRef, useState } from 'react';

interface IReturn {
  error: unknown;
  loading: boolean;
  SvgIcon?: FC<SVGProps<SVGElement>>;
}

export type TIconName = 'account_tree'
| 'add_photo_alternate'
| 'arrow_east'
| 'arrow_west'
| 'call'
| 'close'
| 'content_copy'
| 'download'
| 'favorite_outline'
| 'favorite'
| 'format_list_bulleted'
| 'format_list_bulleted'
| 'grid_on'
| 'help_line'
| 'mail'
| 'more_horiz'
| 'pallet'
| 'person'
| 'search'
| 'system_update_alt';

const useDynamicSvgImport = (iconName: TIconName): IReturn => {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        const icon = await import(`./icons/${iconName}.svg`);
        importedIconRef.current = icon.default;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
};

export default useDynamicSvgImport;
