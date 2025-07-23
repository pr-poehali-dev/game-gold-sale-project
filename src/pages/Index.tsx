import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const so2Products = [
    { id: 'so2-500', name: '500 Голды', price: '99 ₽', originalPrice: '120 ₽', discount: '-17%' },
    { id: 'so2-1000', name: '1000 Голды', price: '190 ₽', originalPrice: '240 ₽', discount: '-20%' },
    { id: 'so2-2500', name: '2500 Голды', price: '450 ₽', originalPrice: '600 ₽', discount: '-25%' },
    { id: 'so2-5000', name: '5000 Голды', price: '850 ₽', originalPrice: '1200 ₽', discount: '-29%' },
  ];

  const tgProducts = [
    { id: 'tg-100', name: '100 Звезд', price: '125 ₽', originalPrice: '150 ₽', discount: '-17%' },
    { id: 'tg-500', name: '500 Звезд', price: '599 ₽', originalPrice: '750 ₽', discount: '-20%' },
    { id: 'tg-1000', name: '1000 Звезд', price: '1150 ₽', originalPrice: '1500 ₽', discount: '-23%' },
    { id: 'tg-2500', name: '2500 Звезд', price: '2750 ₽', originalPrice: '3750 ₽', discount: '-27%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gamer-dark via-gray-900 to-gamer-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gamer-dark/95 backdrop-blur border-b border-gamer-orange/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gamer-orange to-gamer-blue rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">GAME STORE</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#products" className="text-gamer-gray hover:text-gamer-orange transition-colors">Товары</a>
              <a href="#payment" className="text-gamer-gray hover:text-gamer-orange transition-colors">Оплата</a>
              <a href="#delivery" className="text-gamer-gray hover:text-gamer-orange transition-colors">Доставка</a>
              <a href="#contacts" className="text-gamer-gray hover:text-gamer-orange transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gamer-orange/10 to-gamer-blue/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in">
              GAME <span className="text-gamer-orange">STORE</span>
            </h1>
            <p className="text-xl text-gamer-gray mb-8 max-w-2xl mx-auto animate-fade-in">
              Пополни баланс в любимых играх и получи преимущество! 
              Быстро • Надежно • Выгодно
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-gradient-to-r from-gamer-orange to-red-500 hover:from-red-500 hover:to-gamer-orange text-white px-8 py-4 text-lg font-semibold animate-glow">
                <Icon name="Coins" className="mr-2" />
                Купить Голду SO2
              </Button>
              <Button size="lg" variant="outline" className="border-gamer-blue text-gamer-blue hover:bg-gamer-blue hover:text-white px-8 py-4 text-lg font-semibold">
                <Icon name="Star" className="mr-2" />
                Купить Звезды TG
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Выбери свой <span className="text-gamer-orange">продукт</span>
          </h2>
          
          <Tabs defaultValue="standoff2" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800 mb-12">
              <TabsTrigger value="standoff2" className="text-lg py-4 data-[state=active]:bg-gamer-orange data-[state=active]:text-white">
                <Icon name="Target" className="mr-2" />
                Standoff 2
              </TabsTrigger>
              <TabsTrigger value="telegram" className="text-lg py-4 data-[state=active]:bg-gamer-blue data-[state=active]:text-white">
                <Icon name="MessageCircle" className="mr-2" />
                Telegram
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="standoff2">
              <div className="text-center mb-8">
                <img 
                  src="/img/bc889b02-bfe5-489e-b9d8-76a5c57ab0ea.jpg" 
                  alt="Standoff 2 Gold" 
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Голда Standoff 2</h3>
                <p className="text-gamer-gray">Внутриигровая валюта для покупки скинов, ящиков и улучшений</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {so2Products.map((product) => (
                  <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:border-gamer-orange transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="relative">
                        <Badge className="absolute -top-2 -right-2 bg-gamer-orange text-white">{product.discount}</Badge>
                        <CardTitle className="text-white text-xl">{product.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gamer-gray">Standoff 2</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-gamer-orange">{product.price}</div>
                        <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-gamer-orange to-red-500 hover:from-red-500 hover:to-gamer-orange"
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="telegram">
              <div className="text-center mb-8">
                <img 
                  src="/img/6d2e55df-145b-4e2f-935a-01cecbac2718.jpg" 
                  alt="Telegram Stars" 
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Звезды Telegram</h3>
                <p className="text-gamer-gray">Внутренняя валюта для покупок в Telegram и поддержки каналов</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tgProducts.map((product) => (
                  <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:border-gamer-blue transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="relative">
                        <Badge className="absolute -top-2 -right-2 bg-gamer-blue text-white">{product.discount}</Badge>
                        <CardTitle className="text-white text-xl">{product.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gamer-gray">Telegram</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-gamer-blue">{product.price}</div>
                        <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-gamer-blue to-blue-600 hover:from-blue-600 hover:to-gamer-blue"
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Как получить <span className="text-gamer-orange">товары</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="so2-instructions" className="bg-gray-800/50 rounded-lg border-gray-700">
                <AccordionTrigger className="text-white hover:text-gamer-orange px-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Target" />
                    <span>Получение голды Standoff 2</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gamer-gray px-6 pb-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gamer-orange rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Укажите свой игровой ID</h4>
                        <p>Найдите свой уникальный ID в настройках игры Standoff 2</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gamer-orange rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Произведите оплату</h4>
                        <p>Выберите удобный способ оплаты и завершите транзакцию</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gamer-orange rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Получите голду</h4>
                        <p>Голда будет зачислена на ваш аккаунт в течение 5-15 минут</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tg-instructions" className="bg-gray-800/50 rounded-lg border-gray-700">
                <AccordionTrigger className="text-white hover:text-gamer-blue px-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" />
                    <span>Получение звезд Telegram</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gamer-gray px-6 pb-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gamer-blue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Укажите username Telegram</h4>
                        <p>Введите ваш @username в Telegram (без символа @)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gamer-blue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Оплатите покупку</h4>
                        <p>Выберите способ оплаты и подтвердите платеж</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gamer-blue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Получите звезды</h4>
                        <p>Звезды поступят на ваш аккаунт Telegram в течение 10-30 минут</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Payment & Contact Section */}
      <section id="payment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Способы оплаты</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-gamer-orange transition-colors">
                  <Icon name="CreditCard" className="text-gamer-orange mb-2" size={32} />
                  <h4 className="text-white font-semibold">Банковские карты</h4>
                  <p className="text-gamer-gray text-sm">Visa, MasterCard, МИР</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-gamer-orange transition-colors">
                  <Icon name="Smartphone" className="text-gamer-orange mb-2" size={32} />
                  <h4 className="text-white font-semibold">Мобильные платежи</h4>
                  <p className="text-gamer-gray text-sm">СБП, Тинькофф, Сбербанк</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-gamer-orange transition-colors">
                  <Icon name="Wallet" className="text-gamer-orange mb-2" size={32} />
                  <h4 className="text-white font-semibold">Электронные кошельки</h4>
                  <p className="text-gamer-gray text-sm">YooMoney, WebMoney</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-gamer-orange transition-colors">
                  <Icon name="Coins" className="text-gamer-orange mb-2" size={32} />
                  <h4 className="text-white font-semibold">Криптовалюты</h4>
                  <p className="text-gamer-gray text-sm">BTC, ETH, USDT</p>
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div id="contacts">
              <h3 className="text-3xl font-bold text-white mb-8">Контакты</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gamer-blue rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Telegram поддержка</h4>
                      <p className="text-gamer-gray">Быстрая помощь 24/7</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gamer-blue hover:bg-blue-600">
                    Написать в поддержку
                  </Button>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gamer-orange rounded-full flex items-center justify-center">
                      <Icon name="Clock" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Время работы</h4>
                      <p className="text-gamer-gray">Ежедневно, круглосуточно</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gamer-dark border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gamer-orange to-gamer-blue rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">GAME STORE</h3>
            </div>
            <p className="text-gamer-gray mb-6 max-w-2xl mx-auto">
              Надежный магазин игровых валют. Быстрая доставка, безопасные платежи, круглосуточная поддержка.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="sm" className="text-gamer-gray hover:text-gamer-orange">
                Условия использования
              </Button>
              <Button variant="ghost" size="sm" className="text-gamer-gray hover:text-gamer-orange">
                Политика конфиденциальности
              </Button>
              <Button variant="ghost" size="sm" className="text-gamer-gray hover:text-gamer-orange">
                Возврат средств
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 Game Store. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;