var config = {
  development: {
    server: {
      port: 3000,
    },
    database: {
      url: 'mongodb://localhost/chelli_dev'
    }
  },
  testing: {
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost/chelli_test'
    }
  },
  production: {
    server: {
      port: process.env.PORT
    },
    database: {
      url: 'mongodb://terakilobyte:railroad88@dogen.mongohq.com:10008/app32292045'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
