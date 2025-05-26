"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounceCallback } from "usehooks-ts";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebounceCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div>
      <Input
        className="text-gray-400 rounded-sm border-gray-800"
        type="text"
        placeholder="Category"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("category")?.toString()}
      />
    </div>
  );
}
