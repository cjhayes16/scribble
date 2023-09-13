'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { Button } from '@/components/ui/Button'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
}

function copyToClipboard(value: string) {
  console.log(navigator, navigator.clipboard)
  if(navigator.clipboard){
    navigator.clipboard.writeText(value)
  }else{
    copyToClipboardss(value)

  }
}



// 复制文本到剪贴板
function copyToClipboardss(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setHasCopied(false), 2000)

    return () => clearTimeout(timeout)
  }, [hasCopied])

  return (
    <Button
      type='button'
      variant='ghost'
      className='p-0 rounded-sm h-fit hover:bg-background'
      onClick={() => {
        copyToClipboard(value)
        setHasCopied(true)
      }}
    >
      <span className='sr-only'>Copy</span>
      {hasCopied ? <Check className='h-3.5 w-3.5' /> : <Copy className='h-3.5 w-3.5' />}
    </Button>
  )
}
