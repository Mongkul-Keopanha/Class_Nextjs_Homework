"use client"

import { createColumnHelper } from "@tanstack/react-table"
import { type DataTableFeatures } from "./data-table-features"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const columnHelper = createColumnHelper<DataTableFeatures, ProductType>()

export const columns = columnHelper.columns([
  // 1. Checkbox Selection
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
  }),

  // 2. ID Column
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => (
      <span className="text-sm text-muted-foreground font-normal">
        {info.getValue()}
      </span>
    ),
  }),

  // 3. Picture Column
  columnHelper.accessor("image", {
    id: "picture",
    header: "Picture",
    cell: (info) => (
      <div className="flex items-center justify-start py-1">
        <img
          src={info.getValue()}
          alt={info.row.original.title}
          className="h-12 w-12 object-contain rounded-md"
          loading="lazy"
        />
      </div>
    ),
  }),

  // 4. Title Column with sorting
  columnHelper.accessor("title", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1.5 p-0 hover:bg-transparent font-semibold text-foreground"
      >
        Title
        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      </Button>
    ),
    cell: (info) => (
      <span className="max-w-[340px] truncate block text-sm text-foreground">
        {info.getValue()}
      </span>
    ),
  }),

  // 5. Price Column with sorting & red text
  columnHelper.accessor("price", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center gap-1.5 p-0 hover:bg-transparent font-semibold text-foreground"
      >
        Price
        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      </Button>
    ),
    cell: (info) => (
      <span className="font-medium text-rose-500 text-sm">
        ${info.getValue()?.toFixed(2)}
      </span>
    ),
  }),

  // 6. Category Column
  columnHelper.accessor("category", {
    header: "Category",
    cell: (info) => (
      <span className="text-sm text-muted-foreground capitalize">
        {info.getValue()}
      </span>
    ),
  }),

  // 7. Rating Column
  columnHelper.accessor((row) => row.rating?.rate, {
    id: "rating",
    header: "Rating",
    cell: (info) => (
      <span className="text-sm text-muted-foreground">
        {info.getValue() ?? 0}
      </span>
    ),
  }),

  // 8. Action Column
  columnHelper.display({
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted text-muted-foreground hover:text-foreground">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.original.id.toString())}
          >
            Copy ProductType ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => alert(`ProductType: ${row.original.title}\nPrice: $${row.original.price}`)}
          >
            View Details
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  }),
])