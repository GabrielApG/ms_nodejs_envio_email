
class HealthCheckController {

  async health(req, res) {
    res.status(200).send('Health - OK');
  }

  async readiness(req, res) {
    res.status(200).send('Readiness - OK');
  }
}

export default new HealthCheckController();
