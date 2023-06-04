'use client'
import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState(props.src);
  useEffect(() => setSrc(props.src), [props.src]); // update the `src` value when the `prop.src` value changes

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      className={cn(`
        transition-all w-full h-full  rounded-2xl border-2 border-gray-200/50
        ${ isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}`,
        props.className
      )}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
      onLoadingComplete={async () => {
        setLoading(false);
      }}
    />
  );
}