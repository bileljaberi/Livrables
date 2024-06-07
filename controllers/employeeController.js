const Employee = require('../models/Employee');

// Créer un nouvel employé
exports.createEmployee = async (req, res) => {
    const { firstName, lastName, email, position } = req.body;
    try {
        const newEmployee = await Employee.create({ firstName, lastName, email, position });
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir tous les employés
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un employé par ID
exports.getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un employé
exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, position } = req.body;
    try {
        const employee = await Employee.findByPk(id);
        if (employee) {
            employee.firstName = firstName;
            employee.lastName = lastName;
            employee.email = email;
            employee.position = position;
            await employee.save();
            res.status(200).json(employee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un employé
exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (employee) {
            await employee.destroy();
            res.json({ message: 'Employee deleted' });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};