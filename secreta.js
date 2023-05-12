class{
    constructor(name, cpf, rg, salary){
        this._name = name;
        this._cpf = cpf;
        this._rg = rg; 
        this._salary = salary; 
    }
      // Igual para todas as classes e somente mudar os nomes; Em orientação ao objeto
    showData(){
        console.log("Name: "+ this._name); 
        console.log("Cpf: "+ this._cpf); 
        console.log("Rg: "+ this._rg); 
        console.log("Salary: "+ this._salary); 
    }
    setName(name){
        this._name = name;
    }

    getName(){
        return this._name;
     }

    setCpf(cpf){
        this._cpf = cpf;
    }

    getCpf(){
        return this._cpf;
    }

    setRg(rg){
        this._rg = rg;
    }

    getGg(rg){
        return this._rg;
    }
    
    setSalary(salary){
    this._salary = salary;
    }

    getSalary(){
    return this._salary;
}
}

/*
*Em JAVA 
public Employee(String name, String cpf, String rg, double salary) {
    this.name = name;
    this.cpf = cpf;
    this.rg = rg;
    this.salary = salary;
}

public void showData() {
    System.out.println("Name: " + this.name);
    System.out.println("Cpf: " + this.cpf);
    System.out.println("Rg: " + this.rg);
    System.out.println("Salary: " + this.salary);
}

public void setName(String name) {
    this.name = name;
}

public String getName() {
    return this.name;
}

public void setCpf(String cpf) {
    this.cpf = cpf;
}

public String getCpf() {
    return this.cpf;
}

public void setRg(String rg) {
    this.rg = rg;
}

public String getRg() {
    return this.rg;
}

public void setSalary(double salary) {
    this.salary = salary;
}

public double getSalary() {
    return this.salary;
}


*EM SQL 

-- Cria a tabela Employee
CREATE TABLE Employee (
  name VARCHAR(50),
  cpf VARCHAR(11),
  rg VARCHAR(9),
  salary DECIMAL(10,2)
);

-- Insere alguns registros na tabela Employee
INSERT INTO Employee (name, cpf, rg, salary)
VALUES ('João da Silva', '12345678901', '12345678', 2500.00),
       ('Maria Souza', '23456789012', '23456789', 3500.00),
       ('Pedro Santos', '34567890123', '34567890', 4500.00);

-- Exibe todos os registros da tabela Employee
SELECT * FROM Employee;

-- Exibe apenas o nome e o salário dos funcionários
SELECT name, salary FROM Employee;

-- Exibe os funcionários que ganham mais de 3000 reais
SELECT * FROM Employee WHERE salary > 3000;


*/
