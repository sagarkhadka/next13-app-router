'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@components/ui/button'

const page = () => {
  const accordionData = [
    {
      id: 20,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    },
    {
      id: 75,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    },
    {
      id: 55,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    },
    {
      id: 75,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    },
    {
      id: 33,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    },
    {
      id: 11,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    },
    {
      id: 51,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id praesentium aut quibusdam laudantium aperiam consequuntur eaque cumque exercitationem deleniti autem corporis incidunt, repellendus quo ab officiis ipsum dolorum voluptates fugiat?'
    }
  ]

  type Payment = {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed'
    email: string
  }

  const payments: Payment[] = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com'
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com'
    }
  ]
  return (
    <section className='w-full flex-center flex-col max-w-screen-2xl mx-auto'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        The People of the Kingdom
      </h2>

      <Accordion type='single'>
        {accordionData.map(({ id, title, desc }, index) => (
          <AccordionItem
            key={id}
            value={`item-${index}`}>
            <AccordionTrigger className='bg-neutral-50 px-4 py-3 hover:bg-neutral-200 hover:underline-0'>
              {title}
            </AccordionTrigger>
            <AccordionContent className='p-4'>{desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Button
        variant='default'
        size='lg'
        onClick={() => alert('Hello from button')}>
        Hello Button
      </Button>
    </section>
  )
}

export default page
