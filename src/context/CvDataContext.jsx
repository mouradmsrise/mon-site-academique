import { createContext, useContext } from "react";
import { cvData, navLinks } from "../data/cvData";

const CvDataContext = createContext({ data: cvData, navLinks });

export function CvDataProvider({ value, children }) {
  return <CvDataContext.Provider value={value}>{children}</CvDataContext.Provider>;
}

export function useCvData() {
  return useContext(CvDataContext).data;
}

export function useNavLinksData() {
  return useContext(CvDataContext).navLinks;
}
