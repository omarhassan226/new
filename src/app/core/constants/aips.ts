export const apisList = {
  auth: {
    login: '/candidate/login',
    checkStudent: '/auth/checkStudent',
    forgotPassword: '/auth/forgot-password',
    verifyCode: '/auth/verify-code',
    resetPassword: '/auth/reset-password',
    register: '/candidate/register',
  },
  tutorial: {
    general: '/tutorial',
  },
  faq: {
    general: '/faqs',
  },
  embassy: {
    general: '/embassy',
  },
  surveys: {
    general: '/surveys',
    sendAnswers: '/surveys/store-answers',
  },
  poll: {
    general: '/poll',
    sendAnswers: '/poll/store',
  },
  content: {
    general: '/content',
  },
  request: {
    general: '/recruitment-request-form',
    create: '/recruitment-request-form/create',
  },
  position: {
    general: '/position',
  },
  masterData: {
    CvStore:'/cv_bank/store',
    recruitmentProcess: '/recruitment-process',
    applicationApproval: '/application-approval',
    currencies:'/currencies',
    uploadFilesLocalProcess: '/hiring-request-form/upload-files',
    umdf: '/umdf/item',
    umdfAnswers: '/umdf/medical-declaration-form',
    announcement: '/announcement',
    country: '/country/index',
    position: '/position',
    businesSector: '/business-sector',
    cities: '/cities',
    religion: '/religion',
    uiWidget: '/ui-widget',
    person: '/person',
    genderStatus: '/gender-status',
    materialStatus: '/material-status',
    banks: '/bank',
    metaData: '/meta-data',
    airTicket: '/air-lineTicket/store',
  },
};
