

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
      function (context) {


          const Companies = context.app.services.company.Model;
          context.params.sequelize = {
            include: [{ model: Companies,as: 'companies' }],
            raw: false,
          };

        return context;
      }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
