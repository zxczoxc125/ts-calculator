export const getStringNumber: Function = (prevStr: string, addStr: string): string => {
  if (addStr.lastIndexOf('.') > -1 && prevStr.lastIndexOf('.') > -1) {
    return prevStr;
  }
  return prevStr + addStr;
}

export const getStringNumberOnBack: Function = (orgStr: string) => {
  return orgStr ? orgStr.slice(0, orgStr.length - 1) : '';
}