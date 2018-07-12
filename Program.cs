using ConsoleApp1;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IVApp
{
    protected  class Test
    {
        //private Test() //Error: Static classes cannot have instance constructors 
        //{
        //}

        private  void Add() { }
    }
    class Program
    {
        static void Main(string[] args)
        {
        }
    }

            //public class A : B
            //{
            //}
            //public class B
            //{
            //    private B()
            //    {
            //    }
            //}

            //public class MathCalculation
            //{

            //    public int Add(int a, int b)
            //    {
            //        int x = a + b;
            //        return x;
            //    }

            //    public int Subtract(int a, int b)
            //    {
            //        int x = a - b;
            //        return x;
            //    }
            //}
            //[TestFixture]
            //public class TestClass
            //{
            //    [TestCase]
            //    public void AddTest()
            //    {
            //        MathCalculation calculation = new MathCalculation();
            //        int result = calculation.Add(20, 10);
            //        Assert.AreEqual(30, result);
            //    }

            //    [TestCase]
            //    public void SubtractTest()
            //    {
            //        MathCalculation calculation = new MathCalculation();
            //        int result = calculation.Subtract(20, 10);
            //        Assert.AreEqual(10, result);
            //    }
            //}
            //public static class check
            //{
            //    public static void  Add()
            //    {
            //        Console.WriteLine("Add called");
            //    }

            //}
            //class Program
            //{
            //    static void Main(string[] args)
            //    {
            //        check.Add();

            //        Console.ReadLine();
            //    }
            //}

            ///Example Abstract class with constructor 
            //public abstract class Employee
            //{
            //    public int empId { get; set; }
            //    public string empName { get; set; }
            //    public int OfficeLocationId { get; set; }
            //    public Employee()
            //    {
            //        this.OfficeLocationId = 10;
            //    }
            //}

            //public class ITEmployee : Employee
            //{
            //   public ITEmployee() { }
            //}

            //class Program
            //{
            //    static void Main(string[] args)
            //    {
            //        ITEmployee emp = new ITEmployee();
            //        Console.WriteLine(emp.OfficeLocationId);// Reading the Base Employee property
            //        Console.ReadLine();
            //    }
            //}

            //public interface ILogger
            //{
            //    void WriteLog(String Message);
            //}
            //public class FileSystemLogger : ILogger
            //{
            //    public void WriteLog(string Message)
            //    {
            //        //Logic for writting into file system using IO operations.
            //        Console.WriteLine("Logging the error into File log in physical folder.");
            //    }
            //}
            //public class DatabaseLogger : ILogger
            //{
            //    public void WriteLog(String Message)
            //    {
            //        //Logic for writting into windows EventLog using System.Diagnostics.

            //        Console.WriteLine("Logging the error into File log in Database table.");
            //    }
            //}
            //public class WindowsEventLogger : ILogger
            //{
            //    public void WriteLog(string Message)
            //    {
            //        Console.WriteLine("Logging the error into windows eventlog");
            //    }
            //}
            //public enum LoggingType
            //{
            //    FileSystem = 1,
            //    Database = 2,
            //    WindowsEventLog = 3
            //}
            //class Program
            //{
            //    static void Main(string[] args)
            //    {

            //        //DerivedClass dc = new DerivedClass();
            //        //dc.Add();
            //        //    ILogger Logger;
            //        //    LoggingType ConfiguredLoggingType = LoggingType.FileSystem;
            //        //    switch (ConfiguredLoggingType)
            //        //    {
            //        //        case LoggingType.FileSystem:
            //        //            Logger = new FileSystemLogger();
            //        //            break;
            //        //        case LoggingType.Database:
            //        //            Logger = new DatabaseLogger();
            //        //            break;
            //        //        case LoggingType.WindowsEventLog:
            //        //            Logger = new WindowsEventLogger();
            //        //            break;
            //        //        default:
            //        //            Logger = null;
            //        //            break;
            //        //    }
            //        //    Logger.WriteLog("Error logged");
            //    }
            //}
        }

//class Employee
//{

//    public string EmpName { get; set; }
//    public int Salary { get; set; }
//    public static List<Employee> GetEmpRecord()
//    {
//        List<Employee> empCollection = new List<Employee>();
//        empCollection.Add(new Employee { EmpName = "Pradeep", Salary = 10000 });
//        empCollection.Add(new Employee { EmpName = "Manas", Salary = 3456 });
//        empCollection.Add(new Employee { EmpName = "Smita", Salary = 14256 });
//        empCollection.Add(new Employee { EmpName = "Ramesh", Salary = 15000 });
//        empCollection.Add(new Employee { EmpName = "Hari", Salary = 10000 });
//        empCollection.Add(new Employee { EmpName = "Gopal", Salary = 6000 });
//        empCollection.Add(new Employee { EmpName = "Madan", Salary = 2000 });
//        empCollection.Add(new Employee { EmpName = "Siva", Salary = 5000 });
//        empCollection.Add(new Employee { EmpName = "Kareem", Salary = 7000 });
//        empCollection.Add(new Employee { EmpName = "Laxmi", Salary = 7000 });
//        return empCollection;
//    }
//}
//class Program
//{
//    static void Main(string[] args)
//    {
//        var empCollection = Employee.GetEmpRecord();
//        int highestSalary = 3;// 3 is for 3rd ....

//        var employees = (from emp in empCollection
//                         group emp by emp.Salary into g
//                         orderby g.Key descending
//                         select new
//                         {
//                             EmpRecord = g.ToList()
//                         }).ToList();

//        employees[highestSalary - 1].EmpRecord
//            .ForEach(i => Console.WriteLine("Emp Name {0} earns {1}", i.EmpName, i.Salary));

//        Console.ReadKey();
//    }
//}



//public delegate Account covarDel(SavingAccount mc);

//class Program
//{

//    static SavingAccount Method1(SavingAccount bg)
//    {
//        Console.WriteLine("Method1");

//        return new SavingAccount();
//    }
//    static Account Method2(SavingAccount bg)
//    {
//        Console.WriteLine("Method2");

//        return new Account();
//    }

//    static void Main(string[] args)
//    {
//        covarDel del = Method1;

//        Account sm = del(new SavingAccount());
//    }
//}
//class Account { }
//class SavingAccount : Account { }
//class Program
//{
//    static void Main(string[] args)
//    {
//        // Covariance
//        Func<SavingAccount> savingaccount = () => new SavingAccount();
//        Func<Account> account = savingaccount;
//        // Contravariance
//        Action<Account> acc = (aact) =>
//        { Console.WriteLine(aact); };
//        Action<SavingAccount> savingacc = acc;
//    }
//}
//}


//class Program
//{
//    static void Main(string[] args)
//    {

//        var returnValue = Calculate();

//        string format =
//            "Addition: {0}" + Environment.NewLine +
//            "Subtraction: {1}" + Environment.NewLine +
//            "Multiplication: {2}" + Environment.NewLine +
//            "Division: {3}";
//        //Fetching from Tupple
//        string result = string.Format(format, returnValue.Item1, returnValue.Item2, returnValue.Item3, returnValue.Item4);
//        Console.WriteLine(result);
//        Console.ReadKey(true);
//    }

//    private static Tuple<int, int, int, int> Calculate()
//    {
//        int num1 = 20;
//        int num2 = 10;
//        return Tuple.Create(num1 + num2, num1 - num2, num1 * num2, num1 / num2);// Created Tupple which has multiple values 
//    }
//}



//class Program
//{
//    static void Main(string[] args)
//    {

//    int? age = null;
//    Console.WriteLine("age: {0}", age?? -1);
//    age = 10;
//    Console.WriteLine("age: {0}", age ?? -1);
//    Console.ReadLine();
//   }

//}

//annonymous method 

//delegate for representing anonymous method
//delegate int del(int a, int b);
//static void Main(string[] args)
//{
//    //anonymous method using delegate keyword, without any name of the method
//    del d1 = delegate (int a, int b) { return a * b; };
//    int z1 = d1(2, 3);
//    Console.WriteLine(z1);
//}


//class Example
//{
//    string strName;
//    string strCity;

//    public Example(string FirstName, string City)
//    {
//        this.strName = FirstName;
//        this.strCity = City;
//    }
//    //another constructor 
//    public Example(string Name) : this("xxx", "Delhi")
//    {
//        this.strName = Name;
//    }
//}

//class Employee
//{
//    private int id;
//    private string name;
//    public Employee() : this(0, "")
//    {
//    }
//    public Employee(int id, string name)
//    {
//        this.id = id;
//        this.name = name;
//    }
//    public Employee(int id) : this(id, "")
//    {
//    }
//    public Employee(string name) : this(0, name)
//    {
//    }
//}
//class Program
//{
//    static void Main(string[] args)
//    {
//        Employee a = new Employee(), b = new Employee(100, "Pradeep"), c = new Employee(123), d = new Employee("Pradeep");
//    }
//}
//}


//    public class BaseClass
//    {
//        public virtual void Method()
//        {
//            Console.WriteLine("I am a base class method.");
//        }
//    }
//    public class DerivedClass : BaseClass
//    {
//        public new void Method()
//        {
//            Console.WriteLine("I am a child class method.");
//        }
//    }
//static void Main(string[] args)
//{

//    Employee a = new Employee(), b = new Employee(456, "def"),  c = new Employee(123), d = new Employee("abc");

//    //DerivedClass CC = new DerivedClass(); Console.WriteLine(CC.GetFullname("x", "y")); Console.ReadLine();

//    //DerivedClass DC = new DerivedClass();
//    //DC.Method();

//    //Console.ReadLine();
//    ////((BaseClass)DC).Method();
//    // utilityTest.GetTheme();
//}

//    public class utilityTest
//    {

//        private utilityTest() { }

//        public static string GetTheme()
//        {
//            return "Yellow";
//        }

//    }
//}

//    }
//}
//    interface IExampleInterface
//    {
//         string Save();
//    }

//    class Program
//    {
//        class BaseClass
//        {
//            public BaseClass(string str)
//            {
//                Console.WriteLine(str);
//            }
//        }
//        class ChildClass : BaseClass
//        {
//            public ChildClass(string str) : base(str)
//            {

//            }

//        }
//        static void Main(string[] args)
//        {
//            ChildClass CC = new ChildClass("Calling base class constructor from child class");Console.ReadLine();
//        }
//    }

//}

//class Program
//{
//    class BaseClass
//    {
//        public BaseClass()
//        {
//            Console.WriteLine("I am a base class constructor");
//        }
//    }
//    class ChildClass : BaseClass
//    {
//        public ChildClass()
//        {
//            Console.WriteLine("I am a child class constructor");
//        }
//    }
//    static void Main(string[] args)
//    {
//        ChildClass objchild = new ChildClass();Console.ReadLine();
//    }
//}
//}

//class Program
//{
//    public interface ICheckingAccount
//    {
//        string GetAccountName();
//    }
//    public interface ISavingAccount
//    {
//        string GetAccountName();
//    }
//    public class Account : ICheckingAccount, ISavingAccount
//    {
//        string ICheckingAccount.GetAccountName()
//        {
//            return "ICheckingAccount.GetAccountName";
//        }
//        string ISavingAccount.GetAccountName()
//        {
//            return "ISavingAccount.GetAccountName";
//        }
//    }
//    static void Main(string[] args)
//    {
//        ICheckingAccount objcheckingAccount = new Account();
//        Console.WriteLine(objcheckingAccount.GetAccountName());
//        ISavingAccount objsavingAccount = new Account();
//        Console.WriteLine(objsavingAccount.GetAccountName());
//        Console.ReadLine();
//    }

//    public class ClassA
//    {
//        public int id { get; set; }
//        public string Name { get; set; }
//        public void AddEmployee()
//        {
//            Console.WriteLine("AddEmployee :Class A");
//        }
//    }
//    public class ClassB:ClassA
//    {
//        public int salary { get; set; }
//        public void AddEmployeeSalary()
//        {
//            Console.WriteLine("AddEmployeeSalary :Class B");
//        }
//    }


//    //ClassA objclassA = new ClassA();
//    //ClassA objclassB = new ClassA();
//    //ClassA objclassB1 = new ClassB();
//    //ClassB objclassB11 = new ClassA();
//}

//}

