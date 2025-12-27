import { createFileRoute } from '@tanstack/react-router'
import HomeLayout from '@/page/home/home'

export const Route = createFileRoute('/')({
  component: HomeLayout,
})
