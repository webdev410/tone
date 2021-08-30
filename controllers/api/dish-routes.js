const router = require('express').Router();
const Dish = require('../../models/Dish');



// route to get all dishes
router.get('/', async (req, res) => {
    const dishData = await Dish.findAll().catch((err) => { 
        res.json(err);
      });
        const dishes = dishData.map((dish) => dish.get({ plain: true }));
        res.render('all', { dishes });
      });
  
  // route to get one dish
  router.get('/dish/:id', async (req, res) => {
    try{ 
        const dishData = await Dish.findByPk(req.params.id);
        if(!dishData) {
            res.status(404).json({message: 'No dish with this id!'});
            return;
        }
        const dish = dishData.get({ plain: true });
        res.render('dish', dish);
      } catch (err) {
          res.status(500).json(err);
      };     
  });


// route to create/add a dish
router.post('/', async (req, res) => {
  try {
    const dishData = await Dish.create({
      dish_name: req.body.dish_name,
      description: req.body.description,
      guest_name: req.body.guest_name,
      has_nuts: req.body.has_nuts,
    });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
  // Sends the data to the Model so that one dish can be updated with new data in the database.
  try {
    const dish = await Dish.update(
      {
        dish_name: req.body.dish_name,
        description: req.body.description,
        guest_name: req.body.guest_name,
        has_nuts: req.body.has_nuts,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
