import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  readonly className?: string;
  readonly markClassName?: string;
  readonly textClassName?: string;
  readonly showText?: boolean;
}

export function BrandLogo({
  className,
  markClassName,
  textClassName,
  showText = true,
}: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)} aria-label='Trait'>
      <Image
        src='/Logo/ic-medium.png'
        alt=''
        width={40}
        height={40}
        className={cn('h-10 w-10 rounded-[10px]', markClassName)}
        priority
      />
      {showText && (
        <span className={cn('text-2xl font-bold leading-none text-gray-900', textClassName)}>
          Trait
        </span>
      )}
    </span>
  );
}
