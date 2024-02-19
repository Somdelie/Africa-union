import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import Link from "next/link";

const Links = ({ links1, links2, links3 }) => {
  return (
    <div className="text-white">
      <Menubar>
        <MenubarMenu className="bg-black">
          <MenubarTrigger>Solutions</MenubarTrigger>
          <MenubarContent>
            {links1?.map((link, i) => (
              <MenubarItem key={i}>
                <Link href={link?.link}>{link?.title}</Link>
              </MenubarItem>
            ))}
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Resources</MenubarTrigger>
          <MenubarContent>
            {links2?.map((link, i) => (
              <MenubarItem key={i}>
                <Link href={link?.link}>{link?.title}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Company</MenubarTrigger>
          <MenubarContent>
            {links3?.map((link, i) => (
              <MenubarItem key={i}>
                <Link href={link?.link}>{link?.title}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        {/* <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu> */}
      </Menubar>
    </div>
  );
};

export default Links;
