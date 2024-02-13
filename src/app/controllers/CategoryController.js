const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const nameAlreadyInUse = await CategoryRepository.findByName(name);

    if (nameAlreadyInUse) return response.status(404).json({ error: 'name already in use' });

    const category = await CategoryRepository.create({ name });

    response.status(201).json(category);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) response.status(404).json({ error: 'category not found' });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const nameAlreadyInUse = await CategoryRepository.findByName(name);

    if (nameAlreadyInUse) return response.status(404).json({ error: 'name already in use' });

    const updatedCategory = await CategoryRepository.update(id, { name });

    response.json(updatedCategory);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
