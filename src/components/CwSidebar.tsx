"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default function CwSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-gray-900">
        <SidebarHeader className="text-gray-400">
          <h1 className="text-orange-600 text-3xl">CW APP .M.</h1>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-lg">
            Packs .m.
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
