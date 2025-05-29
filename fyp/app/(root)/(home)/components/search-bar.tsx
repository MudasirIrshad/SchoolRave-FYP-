"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedQuery = searchParams.get("query")?.toString();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div data-implementation="Search component with autocomplete">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-grow">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Enter city, district, or school name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-10 text-black"
            defaultValue={selectedQuery}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
