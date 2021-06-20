type TEmployer = {
  id: string;
  name: string;
  lastName?: string;
  age: number | null;
  isActive: boolean;
};

const SERVICE_DEAL_TYPE_SELECTION = "Selección";
const SERVICE_DEAL_TYPE_CUIDEO_ASIST = "Cuideo Asist";

type TServiceDealType =
  | typeof SERVICE_DEAL_TYPE_SELECTION
  | typeof SERVICE_DEAL_TYPE_CUIDEO_ASIST;

type TService =
  | {
      id: string;
      crmName: string;
      dealType: typeof SERVICE_DEAL_TYPE_SELECTION;
      employer: TEmployer;
    }
  | {
      id: string;
      crmName: string;
      dealType: typeof SERVICE_DEAL_TYPE_CUIDEO_ASIST;
    };

const service1: TService = {
  id: "31c62957-78b3-434d-b7b8-37cf22eace0f",
  crmName: "Servicio13254",
  dealType: "Selección",
};

const service2: TService = {
  id: "31c62957-78b3-434d-b7b8-37cf22eace0f",
  crmName: "Servicio13254",
  dealType: "Selecciónss",
};

const service3: TService = {
  id: "31c62957-78b3-434d-b7b8-37cf22eace0f",
  crmName: "Servicio13254",
  dealType: "Selección",
  employer: {
    id: "31c62957-78b3-434d-b7b8-37cf22eace0f",
    name: "TestName",
    age: null,
    isActive: false,
  },
};

const service4: TService = {
  id: "31c62957-78b3-434d-b7b8-37cf22eace0f",
  crmName: "Servicio13254",
  dealType: "Cuideo Asist",
};

const services: TService[] = [];
services.push({
  id: 289389292,
});

export { services };
