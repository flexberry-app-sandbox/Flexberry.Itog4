﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itog4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расчет ост врем.
    /// </summary>
    // *** Start programmer edit section *** (РасчетОстВрем CustomAttributes)

    // *** End programmer edit section *** (РасчетОстВрем CustomAttributes)
    [AutoAltered()]
    [Caption("Расчет ост врем")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасчетОстВремE", new string[] {
            "ВремяПоДоговору as \'Время по договору\'",
            "Доступно as \'Доступно\'",
            "Использовано as \'Использовано\'"})]
    [AssociatedDetailViewAttribute("РасчетОстВремE", "ОказУсл", "ОказУслугE", true, "", "Оказ усл", true, new string[] {
            ""})]
    [View("РасчетОстВремL", new string[] {
            "ВремяПоДоговору as \'Время по договору\'",
            "Доступно as \'Доступно\'",
            "Использовано as \'Использовано\'"})]
    public class РасчетОстВрем : ICSSoft.STORMNET.DataObject
    {
        
        private int fВремяПоДоговору;
        
        private int fДоступно;
        
        private int fИспользовано;
        
        private IIS.Itog4.DetailArrayOfОказУслуг fОказУсл;
        
        // *** Start programmer edit section *** (РасчетОстВрем CustomMembers)

        // *** End programmer edit section *** (РасчетОстВрем CustomMembers)

        
        /// <summary>
        /// ВремяПоДоговору.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору CustomAttributes)
        public virtual int ВремяПоДоговору
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get start)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get start)
                int result = this.fВремяПоДоговору;
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get end)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set start)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set start)
                this.fВремяПоДоговору = value;
                // *** Start programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set end)

                // *** End programmer edit section *** (РасчетОстВрем.ВремяПоДоговору Set end)
            }
        }
        
        /// <summary>
        /// Доступно.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.Доступно CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.Доступно CustomAttributes)
        public virtual int Доступно
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Get start)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Get start)
                int result = this.fДоступно;
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Get end)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Set start)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Set start)
                this.fДоступно = value;
                // *** Start programmer edit section *** (РасчетОстВрем.Доступно Set end)

                // *** End programmer edit section *** (РасчетОстВрем.Доступно Set end)
            }
        }
        
        /// <summary>
        /// Использовано.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.Использовано CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.Использовано CustomAttributes)
        public virtual int Использовано
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Get start)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Get start)
                int result = this.fИспользовано;
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Get end)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Set start)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Set start)
                this.fИспользовано = value;
                // *** Start programmer edit section *** (РасчетОстВрем.Использовано Set end)

                // *** End programmer edit section *** (РасчетОстВрем.Использовано Set end)
            }
        }
        
        /// <summary>
        /// Расчет ост врем.
        /// </summary>
        // *** Start programmer edit section *** (РасчетОстВрем.ОказУсл CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.ОказУсл CustomAttributes)
        public virtual IIS.Itog4.DetailArrayOfОказУслуг ОказУсл
        {
            get
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУсл Get start)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУсл Get start)
                if ((this.fОказУсл == null))
                {
                    this.fОказУсл = new IIS.Itog4.DetailArrayOfОказУслуг(this);
                }
                IIS.Itog4.DetailArrayOfОказУслуг result = this.fОказУсл;
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУсл Get end)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУсл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУсл Set start)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУсл Set start)
                this.fОказУсл = value;
                // *** Start programmer edit section *** (РасчетОстВрем.ОказУсл Set end)

                // *** End programmer edit section *** (РасчетОстВрем.ОказУсл Set end)
            }
        }
        
        // *** Start programmer edit section *** (РасчетОстВрем.Отправить CustomAttributes)

        // *** End programmer edit section *** (РасчетОстВрем.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (РасчетОстВрем.Отправить method implementation)

            return;
            // *** End programmer edit section *** (РасчетОстВрем.Отправить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасчетОстВремE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетОстВремE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетОстВремE", typeof(IIS.Itog4.РасчетОстВрем));
                }
            }
            
            /// <summary>
            /// "РасчетОстВремL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасчетОстВремL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасчетОстВремL", typeof(IIS.Itog4.РасчетОстВрем));
                }
            }
        }
    }
}
