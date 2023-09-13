'use client'

import { HexAlphaColorPicker } from 'react-colorful'

import { useCanvasStore } from '@/stores/canvasStore'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

export default function ColorPicker() {
  const [strokeColor, setStrokeColor] = useCanvasStore(state => [
    state.strokeColor,
    state.setStrokeColor,
  ])

  return (
    <div>
      <Label htmlFor='strokeColor' className='select-none'>
      笔划颜色
      </Label>

      <Popover>
        <PopoverTrigger asChild className='w-full mt-2'>
          <Button className='w-full h-8 p-0 rounded-md ring-2 ring-border ring-offset-2'>
            <div
              className='w-full h-full rounded-md'
              style={{ background: strokeColor }}
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent className='w-fit'>
          <HexAlphaColorPicker
            id='strokeColor'
            color={strokeColor}
            onChange={setStrokeColor}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
