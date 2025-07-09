"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SchoolType, CurriculumType } from "@/generated/prisma";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedQuery = searchParams.get("query")?.toString();
  const selectedCity = searchParams.get("city")?.toString();
  const selectedSchoolType = searchParams.get("schoolType") as SchoolType;
  const selectedCurriculumType = searchParams.get(
    "curriculumType"
  ) as CurriculumType;

  function updateSearchParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value.trim() !== "") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleSearch(term: string) {
    updateSearchParams({ query: term });
  }

  function handleCityChange(city: string) {
    updateSearchParams({ city });
  }

  function handleSchoolTypeChange(schoolType: string) {
    updateSearchParams({ schoolType });
  }

  function handleCurriculumTypeChange(curriculumType: string) {
    updateSearchParams({ curriculumType });
  }

  function clearAllFilters() {
    const params = new URLSearchParams();
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const hasActiveFilters =
    selectedQuery ||
    selectedCity ||
    selectedSchoolType ||
    selectedCurriculumType;

  const getSchoolTypeLabel = (type: SchoolType) => {
    switch (type) {
      case SchoolType.GOVERNMENT:
        return "Government";
      case SchoolType.PRIVATE:
        return "Private";
      case SchoolType.SEMI_GOVERNMENT:
        return "Semi-Government";
      default:
        return type;
    }
  };

  const getCurriculumTypeLabel = (type: CurriculumType) => {
    switch (type) {
      case CurriculumType.FEDERAL:
        return "Federal";
      case CurriculumType.BALUCHISTAN:
        return "Baluchistan";
      default:
        return type;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search by school name or address..."
              className="pl-10"
              defaultValue={selectedQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* City Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <Input
              type="text"
              placeholder="Enter city name..."
              defaultValue={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
            />
          </div>

          {/* School Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              School Type
            </label>
            <Select
              value={selectedSchoolType || ""}
              onValueChange={handleSchoolTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select school type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Types</SelectItem>
                <SelectItem value={SchoolType.GOVERNMENT}>
                  {getSchoolTypeLabel(SchoolType.GOVERNMENT)}
                </SelectItem>
                <SelectItem value={SchoolType.PRIVATE}>
                  {getSchoolTypeLabel(SchoolType.PRIVATE)}
                </SelectItem>
                <SelectItem value={SchoolType.SEMI_GOVERNMENT}>
                  {getSchoolTypeLabel(SchoolType.SEMI_GOVERNMENT)}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Curriculum Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Curriculum
            </label>
            <Select
              value={selectedCurriculumType || ""}
              onValueChange={handleCurriculumTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select curriculum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Curriculums</SelectItem>
                <SelectItem value={CurriculumType.FEDERAL}>
                  {getCurriculumTypeLabel(CurriculumType.FEDERAL)}
                </SelectItem>
                <SelectItem value={CurriculumType.BALUCHISTAN}>
                  {getCurriculumTypeLabel(CurriculumType.BALUCHISTAN)}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 pt-2 border-t">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Search: &quot;{selectedQuery}&quot;
                <button
                  onClick={() => handleSearch("")}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCity && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                City: {selectedCity}
                <button
                  onClick={() => handleCityChange("")}
                  className="hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSchoolType && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                Type: {getSchoolTypeLabel(selectedSchoolType)}
                <button
                  onClick={() => handleSchoolTypeChange("")}
                  className="hover:bg-purple-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCurriculumType && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                Curriculum: {getCurriculumTypeLabel(selectedCurriculumType)}
                <button
                  onClick={() => handleCurriculumTypeChange("")}
                  className="hover:bg-orange-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
